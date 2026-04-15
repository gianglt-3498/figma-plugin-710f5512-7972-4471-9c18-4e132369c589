import StyleDictionary from 'style-dictionary';

function createTailwindCssFormat() {
  return function ({ dictionary }) {
    const utilities = [];
    const groups = {
      colorsPrimitive: [],
      colorsSemantic: [],
      spacing: [],
      radius: [],
      shadow: [],
      font: [],
    };

    const addLine = (arr, line) => {
      if (!arr.includes(line)) arr.push(line);
    };

    // --- Parse tokens ---
    dictionary.allTokens.forEach((token) => {
      const path0 = token.path[0];

      // COLORS: PRIMITIVE
      if (path0 === 'colors - primitive') {
        let group = token.path[1];
        const shade = token.path[2];
        if (group === 'black and white') {
          const colorName = shade.toLowerCase().includes('black') ? 'black' : 'white';
          addLine(groups.colorsPrimitive, `--color-${colorName}: ${token.value};`);
          return;
        }
        if (group === 'black alpha') group = 'black-alpha';
        if (group === 'white alpha') group = 'white-alpha';
        const key = shade?.trim().toLowerCase().replace(/\s+/g, '-');
        addLine(groups.colorsPrimitive, `--color-${group}-${key}: ${token.value};`);
        return;
      }

      // COLORS: SEMANTIC
      if (path0 === 'colors - semantic') {
        const group = token.path[1]?.trim().replace(/\s+/g, '-').toLowerCase();
        const key = token.path[2]?.trim().replace(/\s+/g, '-').toLowerCase();
        const originalValue = token.original?.value;
        if (typeof originalValue === 'string' && originalValue.startsWith('{')) {
          let refKey = originalValue.slice(1, -1).trim();
          refKey = refKey.replace(/^colors\s*[-–]\s*primitive\./i, '');
          const parts = refKey
            .split('.')
            .map((p) => p.trim())
            .filter(Boolean);
          const cssVar =
            parts[0] === 'black and white'
              ? `--color-${parts[1].toLowerCase()}`
              : `--color-${parts.join('-').replace(/\s+/g, '-')}`;
          addLine(groups.colorsSemantic, `--color-${group}-${key}: var(${cssVar});`);
        }
        return;
      }

      // SPACING
      if (path0 === 'tokens' && token.path[1] === 'spacing') {
        const key = token.path[2];
        const value = `${token.original.value / 16}rem`;
        addLine(groups.spacing, `--spacing-${key}: ${value};`);
        return;
      }

      // RADIUS
      if (path0 === 'tokens' && token.path[1] === 'radius') {
        const key = token.path[2];
        addLine(groups.radius, `--radius-${key}: ${token.original.value / 16}rem;`);
        return;
      }

      // SHADOW
      if (path0 === 'effect' && token.path[1] === 'elevation') {
        const shadowName = token.path[2].toLowerCase().replace('.', '-').replace(/^lv-/, 'level-');
        const { offsetX, offsetY, radius, spread, color } = token.value;
        addLine(
          groups.shadow,
          `--shadow-${shadowName}: ${offsetX}px ${offsetY}px ${radius}px ${spread}px ${color};`,
        );
        return;
      }

      // FONT
      if (path0 === 'font') {
        const pathKey = token.path.slice(1).join('-');
        const { fontSize, lineHeight, fontWeight, fontFamily } = token.value;
        addLine(groups.font, `--font-size-${pathKey}: ${fontSize / 16}rem;`);
        addLine(groups.font, `--line-height-${pathKey}: ${lineHeight / 16}rem;`);
        addLine(groups.font, `--font-weight-${pathKey}: ${fontWeight};`);
        const familyKey = fontFamily.toLowerCase().replace(/\s+/g, '-');
        addLine(groups.font, `--font-family-${familyKey}: '${fontFamily}';`);

        // ---- Generate @utility ----
        const utilName = `typo-${pathKey}`;
        utilities.push(`@utility ${utilName} {
  font-size: var(--font-size-${pathKey});
  line-height: var(--line-height-${pathKey});
  font-weight: var(--font-weight-${pathKey});
}`);
      }
    });

    // --- Sort for consistency ---
    Object.values(groups).forEach((arr) => arr.sort((a, b) => a.localeCompare(b)));
    utilities.sort((a, b) => a.localeCompare(b));

    // --- Combine output ---
    const themeContent = Object.values(groups)
      .flat()
      .map((line) => `  ${line}\n`)
      .join('');

    return `@theme inline {\n${themeContent}}\n\n${utilities.join('\n\n')}\n`;
  };
}
const sd = new StyleDictionary({
  source: ['scripts/design-tokens.tokens.json'],
  platforms: {
    tailwind: {
      transformGroup: 'js',
      buildPath: './scripts/',
      files: [
        {
          destination: 'global.css',
          format: 'css/tailwind',
        },
      ],
    },
  },
});

sd.registerFormat({
  name: 'css/tailwind',
  format: createTailwindCssFormat(),
});

sd.buildAllPlatforms();
