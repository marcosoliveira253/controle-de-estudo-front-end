// Main.js
import React, { useEffect, useState } from 'react';
import { useCallback  } from 'react';

const Table = () => {
    const [checkboxes, setCheckboxes] = useState({
        html: false,
        css: false,
        js: false,
        react: false,
        test: false,
        git: false,
        sass: false,
        php: false,
    });

    const [language] = useState(() => {
        const storedLanguage = localStorage.getItem('language');
        return storedLanguage || 'pt'; //O idioma padrão é o Português
    })

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    useEffect(() => {
        const storedCheckboxes = JSON.parse(localStorage.getItem('checkboxes'));
        if (storedCheckboxes) {
        setCheckboxes(storedCheckboxes);
        }
    }, []);

    
    const handleCheckboxChange = useCallback((key) => {
        setCheckboxes((prevCheckboxes) => {
            const newCheckboxes = {...prevCheckboxes, [key]: !prevCheckboxes[key]};
            localStorage.setItem('checkboxes', JSON.stringify(newCheckboxes));
            return newCheckboxes;
            });
        }, [setCheckboxes]);

    return (
        <table>
        <thead>
            <tr>
            <th>Programas</th>
            <th>Tipo</th>
            <th>Estudado</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>
                HTML
            </td>
            <td>Marcação</td>
            <td><input type="checkbox" checked={checkboxes.html} onChange={() => handleCheckboxChange('html')} /></td>
            </tr>
            <tr>
            <td>
                CSS
            </td>
            <td>Estilização</td>
            <td><input type="checkbox" checked={checkboxes.css} onChange={() => handleCheckboxChange('css')} /></td>
            </tr>
            <tr>
            <td>
                JavaScript
            </td>
            <td>Programação</td>
            <td><input type="checkbox" checked={checkboxes.js} onChange={() => handleCheckboxChange('js')} /></td>
            </tr>
            <tr>
            <td>
                React
            </td>
            <td>Framework</td>
            <td><input type="checkbox" checked={checkboxes.react} onChange={() => handleCheckboxChange('react')} /></td>
            </tr>
            <tr>
            <td>
                Jest
            </td>
            <td>Teste Unitário</td>
            <td><input type="checkbox" checked={checkboxes.test} onChange={() => handleCheckboxChange('test')} /></td>
            </tr>
            <tr>
            <td>
                Git
            </td>
            <td>Controle de Versão</td>
            <td><input type="checkbox" checked={checkboxes.git} onChange={() => handleCheckboxChange('git')} /></td>
            </tr>
            <tr>
            <td>
                Sass
            </td>
            <td>Pré-processador</td>
            <td><input type="checkbox" checked={checkboxes.sass} onChange={() => handleCheckboxChange('sass')} /></td>
            </tr>
            
        </tbody>
        </table>
    );
};

export default Table;