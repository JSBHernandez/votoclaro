import CandidateCard from "./CandidateCard";

const CANDIDATES = [
  {
    name: "Paloma Valencia y Juan Daniel Oviedo",
    party: "Centro Democrático",
    description: "La senadora del Centro Democrático, Paloma Valencia, encabeza una de las candidaturas más visibles del sector de derecha. Su fórmula vicepresidencial es el economista Juan Daniel Oviedo. La dupla busca combinar una agenda política conservadora con un perfil técnico en materia económica y de gestión pública.",
    imageUrl: "https://www.elpais.com.co/resizer/v2/T36LYEH6IVEGHPKCMCI4OGOP5U.JPG?auth=5179bfd4bf14a891af33813ba0aa09e4d512c9b1c9dd4041847563e316766efa&smart=true&quality=75&width=1280&height=720"
},
  {
    name: "Iván Cepeda y Aída Quilcué",
    party: "Izquierda",
    description: "El senador Iván Cepeda compite acompañado por la lideresa indígena Aída Quilcué. Cepeda ha construido su carrera política alrededor de la defensa de los derechos humanos y el proceso de paz, y Quilcué le da a la fórmula una fuerte representación de organizaciones sociales y pueblos originarios.",
    imageUrl: "https://www.infobae.com/resizer/v2/EL5OIHLKMBCGDNAVFQXY6OD2R4.png?auth=d47cdc3dc3a8efbd6bd02f000fe83ff2486ef647ee7137979280ece0bada1786&smart=true&width=992&height=558&quality=85"
},
  {
    name: "Claudia López y Leonardo Huerta",
    party: "Centro Político",
    description: "La exalcaldesa de Bogotá, Claudia López, busca consolidarse en el centro político junto al académico Leonardo Huerta. La campaña plantea una agenda enfocada en transparencia institucional, lucha contra la corrupción y fortalecimiento de las instituciones democráticas.",
    imageUrl: "https://imagenes.elpais.com/resizer/v2/Q6ATNQH3MVB6NPPI5FHJKHRANY.jpg?auth=60d789201c6a09239ae02103d2f570843bda04c3218018971e0d90fe5d40f89d&width=1200"
},
  {
    name: "Clara López y María Consuelo del Río",
    party: "Izquierda Democrática",
    description: "La economista Clara López participa con una candidatura en la izquierda democrática junto a María Consuelo del Río. La candidatura busca destacar la importancia de la transparencia y la justicia social en la administración del Estado.",
    imageUrl: "https://90minutos.co/wp-content/uploads/2026/03/Clara-Lopez-confirma-formula-presidencial-2.jpg"
},
  {
    name: "Abelardo de la Espriella y José M. Restrepo",
    party: "Derecha",
    description: "El abogado Abelardo de la Espriella aspira a la Presidencia acompañado por el economista José Manuel Restrepo. La dupla busca posicionar una agenda enfocada en crecimiento económico, fortalecimiento empresarial, estabilidad fiscal y promoción de la inversión.",
    imageUrl: "https://www.infobae.com/resizer/v2/P77ZJUTBOVD75KLMX6IAZOJ7QE.jpeg?auth=9ab3b9f233ad7dee7dbfd669890b56553929386099649705dc720ad75f307b9f&smart=true&width=992&height=827&quality=85"
},
  {
    name: "Mauricio Lizcano y Pedro de La Torre",
    party: "Independiente",
    description: "El exministro Mauricio Lizcano confirmó como fórmula vicepresidencial a Pedro de la Torre luego de que Luis Carlos Reyes se bajó de la campaña. La dupla busca proyectar una imagen técnica y reformista, con énfasis en modernización institucional y fortalecimiento de las finanzas públicas.",
    imageUrl: "https://www.infobae.com/resizer/v2/PKSQHFOO25EGBFPOANK2XORS24.png?auth=e64087699eadfbf064659ac0aa682b55fef72944f6097d3cfb58f7595bde3977&smart=true&width=992&height=558&quality=85"
},
  {
    name: "Miguel Uribe y Luisa Fernanda Villegas",
    party: "Centro Democrático",
    description: "Miguel Uribe Londoño participa en la contienda presidencial acompañado por Luisa Fernanda Villegas. Su campaña se enfoca en temas como seguridad, crecimiento económico y fortalecimiento institucional, buscando ampliar su alcance en distintos sectores del electorado.",
    imageUrl: "https://imagenes2.eltiempo.com/files/image_600_455/files/fp/uploads/2026/03/25/69c437559cdb8.r_d.649-241-7218.jpeg"
},
  {
    name: "Roy Barreras y Martha Lucía Zamora",
    party: "Fuerza de la Paz",
    description: "El exsenador Roy Barreras se lanza junto a la jurista Martha Lucía Zamora. La fórmula busca proyectar una imagen de experiencia política combinada con conocimiento jurídico del funcionamiento del Estado debido a la amplia trayectoria de ambos.",
    imageUrl: "https://www.elpais.com.co/resizer/v2/6ZOWHECP6NC5FEUWFZINRQM2XM.png?auth=46782d8c98a8ba59e1e9cf60b53c918f37880cb88a974415e9ce514a231584bd&smart=true&quality=75&width=1280&fitfill=false"
},
  {
    name: "Sondra Macollins y Leonardo Karam",
    party: "Independiente",
    description: "La abogada Sondra Macollins es acompañada por el empresario Leonardo Karam. La dupla busca proyectar una imagen de cambio frente a los partidos tradicionales y atraer votantes inconformes con el establecimiento político, promoviendo la renovación institucional.",
    imageUrl: "https://caracol.com.co/resizer/v2/ROZMFINDL5ELXFHEKXTDUMLS6I.jpeg?auth=cc1be59415d209d1d93b09cbee4d8a822b22ff71ce04cb4f7a262dadcd7a2ce0&quality=70&width=990&height=556&smart=true"
},
  {
    name: "Luis Murillo y Luz María Zapata",
    party: "Centro Esperanza",
    description: "El exministro Luis Gilberto Murillo se presenta con Luz María Zapata. La fórmula busca posicionar un proyecto enfocado en el desarrollo sostenible, equidad territorial y un fuerte fortalecimiento gubernamental de las distintas regiones del país.",
    imageUrl: "https://imagenes2.eltiempo.com/files/image_1200_535/files/fp/uploads/2026/03/23/69c17d374f834.r_d.488-556-9002.jpeg"
},
  {
    name: "Sergio Fajardo y Edna Bonilla",
    party: "Compromiso Ciudadano",
    description: "El exgobernador Sergio Fajardo consolida su candidatura de centro con Edna Bonilla. Plantean una agenda enfocada en mejorar el sistema educativo, reducir desigualdades sociales y fortalecer de forma general la institucionalidad democrática nacional.",
    imageUrl: "https://www.elespectador.com/resizer/v2/37G33YXTAZCYJJN4WSWCNM3PYA.png?auth=071b2c6de04199faad4f8b402be0943bdc306e908398f9ca7bb3e99cf6084979&width=920&height=613&smart=true&quality=60"
},
  {
    name: "Carlos Caicedo y Nelson Javier Alarcón",
    party: "Fuerza Ciudadana",
    description: "El exgobernador Carlos Caicedo compite con Nelson Javier Alarcón. La dupla busca posicionar una agenda de cambio desde las regiones, priorizando la inversión social, autonomía territorial y el fortalecimiento de la educación pública como eje nacional.",
    imageUrl: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ZytIH.img?w=768&h=542&m=6&x=691&y=226&s=279&d=279"
},
  {
    name: "Santiago Botero y Carlos Fernando Cuevas",
    party: "Derecha Independiente",
    description: "El empresario Santiago Botero compite con Carlos Fernando Cuevas. La campaña centra su propuesta en la reducción drástica del gasto público, seguridad jurídica para la inversión y una reforma a las instituciones de justicia para combatir la criminalidad.",
    imageUrl: "https://www.kienyke.com/sites/default/files/styles/interna_contenido_xl_l_m/public/2024-10/santiago-botero.webp?itok=_x4KKMct"
},
  {
    name: "Gustavo Matamoros y Robinson Alonso",
    party: "Alianza Cívica",
    description: "El General (r) Gustavo Matamoros se asocia con el líder ecologista Robinson Alonso Giraldo. Buscan atraer a un electorado que prioriza la autoridad y el orden bajo un marco de sostenibilidad y protección de los recursos naturales frente a las economías ilícitas.",
    imageUrl: "https://www.elespectador.com/resizer/v2/XFK24P7COVFNNLHPVXWFERX4UM.jpg?auth=6d39ff5ce71e1de2cdc31015ed680d198928c0492a731afc40f4aead7122162a&width=920&height=613&smart=true&quality=60"
}
];

export default function CandidatesGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {CANDIDATES.map((candidate, idx) => (
        <CandidateCard key={idx} {...candidate} />
      ))}
    </section>
  );
}