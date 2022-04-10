import React from "react";

export const useBeforeMount = (_fun: React.EffectCallback) => React.useEffect(_fun, [])