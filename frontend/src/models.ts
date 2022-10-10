export type StarWarsCarouselModels = {src: string, alt: string }

export type PeopleData = {

    birth_year: string,
    created: string,
    edited: string,
    eye_color: string,
    films: Array<string>,
    gender: string,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    name: string,
    skin_color: string,
    species: Array<any>,
    starships: Array<string>,
    url: string,
    vehicles: Array<any>

}

export type PlanetsData = {

name: string, 
rotation_period: string, 
orbital_period: string, 
diameter: string,
climate: string,
gravity: string,
terrain: string,
surface_water: string, 
population: string, 
}

export type StarshipsData = {

name: string,
model: string,
manufacturer: string,
cost_in_credits: string,
length: string,
max_atmosphering_speed: string,
crew: string,
passengers: string,
cargo_capacity: string,
consumables: string,
hyperdrive_rating: string,
MGLT: string,
starship_class: string,

}

export type VehiclesData = {


name: string,
model: string,
manufacturer: string,
cost_in_credits: string,
length: string,
max_atmosphering_speed: string,
crew:  string,
passengers:  string,
cargo_capacity:  string,
consumables: string,
vehicle_class: string,

}


export type StarWarsCarouselText = {header: string, text: string}