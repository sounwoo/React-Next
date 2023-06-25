export const checkValidationFile = (file?: File): boolean => {
    if (typeof file === "undefined") {
        alert("파일이 없습니다.");
        return false;
    }
    if (file.size > 5 * 1024 ** 2) {
        alert("5MB 용량만 가능합니다.");
        return false;
    }

    if (!file.type.includes("jpeg") && !file.type.includes("png")) {
        alert("jpeg 또는 png만 가능합니다.");
        return false;
    }

    return true;
};
