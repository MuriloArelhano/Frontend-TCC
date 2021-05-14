import { useState } from 'react';

function hasSize(password) {
    return password.length >= 6;
}

function hasLowerCase(password) {
    return !!password.match(/[a-z]/g);
}

function hasUpperCase(password) {
    return !!password.match(/[A-Z]/g);
}

function hasNumber(password) {
    return !!password.match(/[0-9]/g);
}

function hasSpecialCharacter(password) {
    return !!password.match(/[^a-zA-Z0-9]+/g);
}

function getPasswordStrength(password) {
    if (hasSize(password)) {
        // Forte: mais de 6 caracteres, letras minúsculas, letras maiúsculas, números e caracteres especiais
        if (
            hasLowerCase(password) && hasUpperCase(password) && hasNumber(password) && hasSpecialCharacter(password)
        ) return 4;            
        // Boa: mais de 6 caracteres e os três tipos de caracter
        else if (
            (hasLowerCase(password) && hasUpperCase(password) && hasNumber(password)) ||
            (hasLowerCase(password) && hasUpperCase(password) && hasSpecialCharacter(password)) ||
            (hasLowerCase(password) && hasNumber(password) && hasSpecialCharacter(password)) ||
            (hasUpperCase(password) && hasNumber(password) && hasSpecialCharacter(password))
        ) return 3;
        // Moderada: mais de 6 caracteres e só dois tipos de caracter
        else if (
            (hasLowerCase(password) && hasUpperCase(password)) ||
            (hasLowerCase(password) && hasNumber(password)) ||
            (hasUpperCase(password) && hasNumber(password)) ||
            (hasLowerCase(password) && hasSpecialCharacter(password)) ||
            (hasUpperCase(password) && hasSpecialCharacter(password)) ||
            (hasNumber(password) && hasSpecialCharacter(password))
        ) return 2;
        // Fraca: mais de 6 caracteres e só um tipo de caracter
        else
            return 1;
    } else {
        return null;
    }
}

function usePasswordStrength() {
    const [strength, setStrength] = useState(null);
    const [password, setPassword] = useState([]);

    const result = getPasswordStrength(password);
    
    if (result !== strength) setStrength(result);

    return [strength, setPassword];
}

export default usePasswordStrength;