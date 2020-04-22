export const compareByCondition = (first = 0, second = 0, condition = '>') => {
  const _first = Number(first) || 0;
  const _second = Number(second) || 0;

  switch (condition) {
    case '>':
      return _first > _second;
    case '>=':
      return _first >= _second;
    case '<':
      return _first < _second;
    case '<=':
      return _first <= _second;
    default:
      return false;
  }
};
