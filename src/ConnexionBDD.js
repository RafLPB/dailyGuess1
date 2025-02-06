/*import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function ConnexionBDD() {

    const oracledb = require('oracledb');
    const express = require('express');
    const app = express();
    app.use(express.json());

// Informations de connexion
    const config = {
        user: "duongr",
        password: "080294810EE",
        connectString: "http://orainfo.iutmontp.univ-montp2.fr:5560/isqlplus/login.uix?bajaPage=forward=workspace"  // Ou l'adresse de ton serveur Oracle
    };

    async function getConnection() {
        try {
            const connection = await oracledb.getConnection(config);
            return connection;
        } catch (err) {
            console.error('Erreur de connexion :', err);
        }
    }



// Exemple de route pour récupérer des utilisateurs
    /*app.get('/users', async (req, res) => {
        let connection;

        try {
            connection = await getConnection();
            const result = await connection.execute('SELECT * FROM users');
            res.json(result.rows);  // On retourne les utilisateurs sous forme de JSON
        } catch (err) {
            console.error('Erreur lors de la récupération des utilisateurs :', err);
            res.status(500).json({error: 'Erreur serveur'});
        } finally {
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error('Erreur de fermeture de la connexion :', err);
                }
            }
        }
    });*//*
}*/
/*
export default ConnexionBDD;*/