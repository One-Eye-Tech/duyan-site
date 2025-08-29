export function rem(px) {
  if (px == null) return px;
  const value = typeof px === 'string' ? parseFloat(px) : px;
  if (Number.isNaN(value)) return px;
  return `${value / 16}rem`;
}

export function remSpace(...values) {
  return values
    .map((v) => (v === 0 || v === '0' ? '0' : rem(v)))
    .join(' ');
}

