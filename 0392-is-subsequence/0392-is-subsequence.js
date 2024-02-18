var isSubsequence = function(s, t) {
    let sIndex = 0;
    let tIndex = 0;

    // `t`를 순회하면서 `s`의 문자를 찾습니다.
    while (tIndex < t.length && sIndex < s.length) {
        if (s[sIndex] === t[tIndex]) {
            // 일치하는 문자를 찾으면 `s`의 다음 문자로 이동합니다.
            sIndex++;
        }
        // `t`의 다음 문자로 이동합니다.
        tIndex++;
    }

    // `s`의 모든 문자를 순회했다면 `s`는 `t`의 부분 수열입니다.
    return sIndex === s.length;
};
