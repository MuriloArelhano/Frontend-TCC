import React, { useEffect } from 'react';
// styles
import { Container } from './style';
// hooks
import { usePasswordStrength } from '../../hooks';

const PasswordStrength = ({ password }) => {
    const [strength, setPassword] = usePasswordStrength();

    useEffect(() => {
        setPassword(password);
    }, [password, setPassword]);

    return (
        <Container>
            {strength === 1 && (
                <>
                    <div className="stage weak" />
                    <div className="stage" />
                    <div className="stage" />
                    <div className="stage" />
                </>
            )}
            {strength === 2 && (
                <>
                    <div className="stage weak" />
                    <div className="stage regular" />
                    <div className="stage" />
                    <div className="stage" />
                </>
            )}
            {strength === 3 && (
                <>
                    <div className="stage weak" />
                    <div className="stage regular" />
                    <div className="stage good" />
                    <div className="stage" />
                </>
            )}
            {strength === 4 && (
                <>
                    <div className="stage weak" />
                    <div className="stage regular" />
                    <div className="stage good" />
                    <div className="stage strong" />
                </>
            )}
        </Container>
    );
}

export default PasswordStrength;