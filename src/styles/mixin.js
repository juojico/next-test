export const wh = (w = '100%', h = 'auto') => `
  width: ${typeof w === 'number' ? w + 'px' : w};
  height: ${typeof h === 'number' ? h + 'px' : h};
`;

export const xy = (x = 0, y = 0) => `
  left: ${typeof x === 'number' ? x + 'px' : x};
  top: ${typeof y === 'number' ? y + 'px' : y};
`;

export const flex = (
  content = 'center',
  items = 'center',
  direction = 'row',
  wrap = 'wrap'
) => `
  display: flex;
  justify-content: ${content};
  align-items: ${items};
  flex-direction: ${direction};
  flex-wrap: ${wrap};
`;

export const bg = (
  image = '',
  position = 'center center',
  size = 'contain',
  repeat = 'no-repeat'
) => `
  background-image: url(${image});
  background-position: ${position};
  background-size: ${size};
  background-repeat: ${repeat};
`;

export const font = (
  size = 16,
  color = false,
  weight = false,
  height = false
) => `
  font-size: ${typeof size === 'number' ? size + 'px' : size};
  ${color !== false ? `color: ${color};` : ''}
  ${weight !== false ? `font-weight: ${weight};` : ''}
  ${
    height !== false
      ? `line-height: ${typeof height === 'number' ? height + 'px' : height};`
      : ''
  }
`;
