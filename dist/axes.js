const axes = [
 {
  topic:'Seguridad',id:'seguridad',number:'01',name:'Seguridad y justicia',title:'Vivir sin miedo.<br>Reparar el daño en comunidad.',
  question:'¿Cómo prevenir las violencias y devolver recursos a los barrios afectados?',
  paragraphs:[
   'La violencia afecta de manera desigual a los barrios y modifica la vida cotidiana: cómo se usa el espacio público, cómo se circula y qué oportunidades encuentran las y los jóvenes. El Plan Integral de Seguridad elaborado en 2023 identifica en el Área Reconquista una concentración de conflictos y una respuesta estatal que necesita mayor coordinación.',
   'Desde Idear proponemos abordar esa brecha con prevención, acompañamiento comunitario y articulación entre áreas sociales, sanitarias, urbanas y de seguridad. La reparación también importa: los bienes recuperados del delito pueden convertirse, con intervención judicial y reglas transparentes, en recursos para las comunidades afectadas.'
  ],
  factors:['Intervenciones fragmentadas entre agencias y niveles del Estado.','Desigual exposición a las violencias y barreras para acceder a cuidados.','Falta de un circuito de restitución social de bienes recuperados.'],
  actors:'Municipio, Justicia, áreas de seguridad, salud y desarrollo social, organizaciones barriales y universidades.',
  direction:'Articular la prevención y el cuidado con la reparación comunitaria del daño.',
  evidence:[{value:'+50%',text:'Aumento interanual de hechos altamente lesivos',period:'1.er semestre de 2026 · informe citado en la presentación'}],
  source:'Lectura del eje: Plan Integral de Seguridad – San Martín (2023) y “La reutilización social de los bienes recuperados del crimen organizado” (Idear Ciudad, noviembre de 2025). Indicador: presentación “10 problemas, 10 políticas”.'
 },
 {
  topic:'Ambiente',id:'ambiente',number:'02',name:'Ambiente',title:'Una ciudad que cuide<br>a quienes la habitan.',
  question:'¿Cómo distribuir mejor los costos ambientales y recuperar suelo, agua y materiales?',
  paragraphs:[
   'La disposición de residuos de la región metropolitana deja una huella local. En torno al CEAMSE y al río Reconquista conviven barrios, actividades de recuperación de materiales y pasivos ambientales. El diagnóstico del equipo sobre residuos muestra que la cuestión ambiental está ligada a las condiciones de trabajo y de vida de quienes habitan ese territorio.',
   'A esa carga se suma el riesgo de inundaciones que señala la agenda de propuestas. La brecha es entre una ciudad que concentra impactos y una que puede reducirlos, recuperar materiales y ampliar sus espacios públicos. Por eso vinculamos la gestión integral de residuos, la infraestructura que absorbe el agua y la restauración ambiental.'
  ],
  factors:['Dependencia del enterramiento y dificultades para recuperar materiales.','Infraestructura insuficiente para retener e infiltrar el agua de lluvia.','Desigualdad en el acceso a ambientes saludables y espacios verdes.'],
  actors:'Municipio, CEAMSE, organismos provinciales, cooperativas y recuperadores urbanos, instituciones educativas y vecinos.',
  direction:'Reducir el enterramiento, fortalecer el trabajo de recuperación y sumar infraestructura verde y azul.',
  evidence:[{value:'85%',text:'De los residuos del AMBA se disponen en Norte III, según la presentación',period:'Referencias citadas: 2025–2026'},{value:'150 ha',text:'Alcance propuesto para la reserva en el ex relleno Norte II',period:'Superficie de la propuesta · no corresponde a una obra ejecutada'}],
  source:'Lectura del eje: “Diagnóstico sobre residuos en el partido de General San Martín” (archivo de trabajo del equipo, 2020) y presentación “10 problemas, 10 políticas”. Los datos históricos del diagnóstico se usan como antecedentes; las cifras destacadas corresponden a la presentación.'
 },
 {
  topic:'Hábitat',id:'habitat',number:'03',name:'Hábitat y ciudad',title:'Acceder a una vivienda.<br>Poder habitar la ciudad.',
  question:'¿Cómo acercar vivienda, servicios y oportunidades a quienes hoy encuentran más barreras?',
  paragraphs:[
   'Según el material del equipo basado en el Censo 2022, 38.613 hogares de San Martín alquilan: el 23,9% de los hogares particulares ocupados. Esa escala vuelve al alquiler una cuestión pública que requiere información, acompañamiento y herramientas para facilitar el acceso y la permanencia en la vivienda.',
   'La desigualdad también se expresa en dónde se vive. La investigación de Idear sobre Barrio Nuevo–Cárcova muestra la distancia entre construir viviendas y construir ciudad: servicios, equipamientos, conectividad y continuidad de las políticas. La agenda une el acompañamiento a inquilinos con una transformación urbana que reconozca el potencial del Área Reconquista.'
  ],
  factors:['Barreras contractuales y económicas para acceder al alquiler.','Desigual acceso a infraestructura, servicios y equipamientos.','Discontinuidades de las intervenciones públicas sobre el hábitat.'],
  actors:'Hogares inquilinos, propietarios, organizaciones territoriales, municipio y organismos de vivienda e infraestructura.',
  direction:'Facilitar el acceso a la vivienda e integrar los barrios a las oportunidades de la ciudad.',
  evidence:[{value:'23,9%',text:'De los hogares particulares ocupados alquila su vivienda',period:'San Martín · Censo 2022, según elaboración del equipo'},{value:'38.613',text:'Hogares inquilinos sobre 161.480 hogares particulares ocupados',period:'San Martín · Censo 2022, según elaboración del equipo'}],
  source:'Lectura del eje: “Cifras de la inquilinización de San Martín” (material del equipo basado en Censo 2022) y “Entre las viviendas sin ciudad y la ciudad sin viviendas” (Idear Ciudad, Café de las Ciudades, abril de 2026).',
  readMore:{url:'https://cafedelasciudades.com.ar/articulos/entre-las-viviendas-sin-ciudad-y-la-ciudad-sin-viviendas/',label:'Leer la investigación sobre hábitat'}
 },
 {
  topic:'Movilidad',id:'movilidad',number:'04',name:'Transporte y movilidad',title:'Que moverse no amplíe<br>las desigualdades.',
  question:'¿Cómo conectar mejor los barrios con el trabajo, el estudio y los servicios?',
  paragraphs:[
   'La movilidad organiza el acceso a las oportunidades. Cuando los recorridos no se articulan, las esperas se alargan o los trayectos son inseguros, llegar al trabajo, estudiar o atenderse requiere más tiempo y recursos. La presentación identifica esa relación entre transporte, infraestructura y desigualdad territorial.',
   'El peso del ramal José León Suárez dentro del Mitre permite pensar una red que aproveche la infraestructura existente y facilite los trasbordos. La propuesta combina una nueva estación, conexiones con colectivos y bicicletas, recorridos seguros y revisión de frecuencias. El objetivo es acercar la ciudad a la vida cotidiana de sus habitantes.'
  ],
  factors:['Desconexión entre modos de transporte y recorridos barriales.','Infraestructura insuficiente en accesos, paradas y trayectos.','Dificultades de frecuencia y cobertura señaladas en el diagnóstico.'],
  actors:'Municipio, operadores ferroviarios y de colectivos, autoridades de transporte y usuarios de los distintos barrios.',
  direction:'Integrar tren, colectivo, bicicleta y caminata con conexiones accesibles y seguras.',
  evidence:[{value:'48%',text:'De los pasajeros pagos del Mitre corresponden al ramal José León Suárez',period:'2025 · CNRT, según la referencia de la presentación'}],
  source:'Lectura del eje: presentación “10 problemas, 10 políticas”. Referencia estadística allí citada: CNRT, Informes Estadísticos Anuales de la Red Ferroviaria de Pasajeros del AMBA (2025).'
 },
 {
  topic:'Producción',id:'produccion',number:'05',name:'Trabajo y producción',title:'Sostener la industria.<br>Crear nuevas oportunidades.',
  question:'¿Qué puede hacer el municipio para fortalecer el trabajo y el entramado PyME?',
  paragraphs:[
   'San Martín conserva un entramado industrial de gran escala: 35.983 puestos formales en junio de 2025, según los registros SIPA citados por el equipo. Sin embargo, entre enero de 2024 y junio de 2025 perdió el 3,93% de ese empleo. La escala productiva convive con dificultades de inversión, financiamiento y aprovechamiento de la capacidad instalada.',
   'La ficha de trabajo sitúa el problema en un contexto nacional adverso y con impactos diferentes según la rama industrial. A la vez, abre una pregunta local: cómo mejorar la vinculación tecnológica, la previsibilidad, los trámites y la logística. La agencia de desarrollo y el puerto seco buscan intervenir sobre esas condiciones para sostener empleo y ampliar oportunidades.'
  ],
  factors:['Dificultades de demanda, financiamiento e inversión.','Exposición desigual de las ramas industriales a la crisis.','Barreras de vinculación tecnológica, logística e inserción exportadora.'],
  actors:'PyMEs, trabajadores y sus organizaciones, municipio, UNSAM, INTI y organismos vinculados al desarrollo productivo.',
  direction:'Vincular capacidades locales, tecnología y logística para fortalecer producción y empleo.',
  evidence:[{value:'35.983',text:'Puestos industriales formales en San Martín',period:'Junio de 2025 · SIPA / CER-UNSAM, citado por el equipo'},{value:'−3,93%',text:'Variación del empleo industrial formal',period:'Enero de 2024 a junio de 2025 · SIPA / CER-UNSAM'}],
  source:'Lectura del eje: ficha “Desarrollo productivo y trabajo” (5 de octubre de 2026) y síntesis “San Martín y la industria: hallazgos y comparación con municipios vecinos”. Registros SIPA y encuestas empresariales son series distintas; sus variaciones no se presentan como equivalentes.'
 }
];
