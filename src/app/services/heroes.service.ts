import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
    private heroes:Heroe[]=
  [
  	{
  		nombre: "Aquaman",
  		bio: "El poder mas conocido de acuaman es la comunicacion telepatica con los seres del mar",
  		img: "assets/img/aquaman.png",
  		aparicion: "1941-11-01",
  		casa: "DC"
  	},
  	{
  		nombre: "Batman",
  		bio: "El es un caballero de la noche que pasa toda la vida de party",
  		img: "assets/img/batman.png",
  		aparicion: "1939-05-01",
  		casa: "DC"
  	},
  	{
  		nombre: "Superman",
  		bio: "El super mamey de otro planeta, su debilidad son las menores de 18 y la criptonita",
  		img: "assets/img/superman.png",
  		aparicion: "1938-11-01",
  		casa: "DC"
  	},
  	{
  		nombre: "Thor",
  		bio: "El carita de perro hijo de odin, su mas grande fuerza viene de su martillon",
  		img: "assets/img/thor.png",
  		aparicion: "1941-11-01",
  		casa: "Marvel"
  	},
  	{
  		nombre: "Hulk",
  		bio: "El poronga verde, cuando se enoja destroza todo a su paso sin importarle nada",
  		img: "assets/img/hulk.png",
  		aparicion: "1941-11-01",
  		casa: "Marvel"
  	},
  	{
  		nombre: "Wonder Woman",
  		bio: "La que todos se quieren follar, tremendo cabuque que se carga y somete a todos con su latigo de la verdad",
  		img: "assets/img/wonderwoman.png",
  		aparicion: "1941-11-01",
  		casa: "DC"
  	},
  	{
  		nombre: "Iron Man",
  		bio: "El papu lord, millonario y con un gran conocimiento creo una armadura muy poderosa que es casi como tener super poderes",
  		img: "assets/img/ironman.png",
  		aparicion: "1941-11-01",
  		casa: "Marvel"
  	}
  ];
  constructor() {
    // console.log("Servicio listo para usarse!!")
   }
   getHeroes(){
     return this.heroes;
   }

   getHeroe(idx:string){
     return this.heroes[idx];
   }

   buscarHeroes(termino:string):Heroe[]{
     let heroesArr:Heroe[]=[];

     termino =termino.toLowerCase();

     for(let heroe of this.heroes){

       let nombre = heroe.nombre.toLowerCase();

       if(nombre.indexOf(termino) >=0){
         heroesArr.push(heroe)
       }
     }
     return heroesArr;
   };
}

export interface Heroe {
  nombre:string;
  bio:string;
  img:string;
  aparicion:string;
  casa:string;
};
