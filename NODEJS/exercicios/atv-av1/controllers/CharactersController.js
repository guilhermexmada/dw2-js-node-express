// importando Express com import() - que é mais moderno - ao invés de require() -> será necessário mudar o package.json
import express from "express";

// variável responsável por criar as rotas, recebendo apenas o método para gerenciamento de rotas
const router = express.Router();

router.get("/characters", (req,res) => {
    const characters = [
        {
            name: "Bazzar",
            image: "mage",
            stars: 3,
            life: 300,
            mana: 80,
        },
        {
            name: "Nalah",
            image: "elfic",
            stars: 2,
               life: 300,
            mana: 50,
        },
        {
            name: "Draug'Ur",
            image: "viking",
            stars: 2,
               life: 600,
            mana: 30,
        },
        {
            name: "Fang",
            image: "monk",
            stars: 3,
               life: 500,
            mana: 75,
        },
        {
            name: "Illia",
            image: "fairy",
            stars: 3,
               life: 150,
            mana: 90,
        },
        {
            name: "Avorak",
            image: "dragon",
            stars: 5,
               life: 800,
            mana: 45,
        },
        {
            name: "Mosqueter",
            image: "shooter",
            stars: 3,
               life: 350,
            mana: 25,
        },
        {
            name: "Lorus",
            image: "lion",
            stars: 4,
               life: 450,
            mana: 80,
        },
        {
            name: "Fletcher",
            image: "poison",
            stars: 2,
               life: 300,
            mana: 100,
        },
        {
            name: "Guard",
            image: "paladin",
            stars: 3,
               life: 700,
            mana: 100,
        },
        {
            name: "Brook",
            image: "orc",
            stars: 2,
               life: 750,
            mana: 100,
        },
        {
            name: "Melrrera",
            image: "witch",
            stars: 5,
               life: 250,
            mana: 100,
        },
        {
            name: "Arthadonte",
            image: "champion",
            stars: 4,
               life: 500,
            mana: 100,
        },
        {
            name: "Lupus",
            image: "wolf",
            stars: 2,
               life: 450,
            mana: 100,
        },
    ];
    res.render("characters",{
        characters: characters,
    });
});

//  exportando o objeto router
export default router;