export const getItemFromCookies = (fieldName: string): string | null => {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === fieldName) {
            return decodeURIComponent(value);
        }
    }

    return null;
}

export const setItemToCookies = (fieldName: string, value: string, expirationDays: number = 10000) => {
    const date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);

    const expires = `expires=${date.toUTCString()}`;
    const encodedUserId = encodeURIComponent(value);
    
    document.cookie = `${fieldName}=${encodedUserId}; ${expires}; path=/`;
}

export const deleteItemFromCookies = (fieldName: string) => {
    document.cookie = `${fieldName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
