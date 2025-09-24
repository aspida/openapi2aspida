let includeDeprecated = false;

export const setIncludeDeprecated = (value: boolean) => {
  includeDeprecated = value;
};

export const getIncludeDeprecated = (): boolean => includeDeprecated;
