'use client'
import { Card, Text, Button, Icon, Flex, Title, Grid} from "@tremor/react";
import { LightBulbIcon, LinkIcon, BeakerIcon, ArrowRightIcon } from '@heroicons/react/24/solid'


const categories = [
  {
    title:"Enviar alerta",
    text:"`¡Atención! se ejecutará la API de 24cevent.com!`",
    action: {
      via: "API",
      method: "POST",
      endpoint: "https://app.24cevent.com/api/clientapi/sendNotification",
      body: {
        "access_token": "ZZEdpGLrSntVruR8LEVi3DrCQMnKPZdLg4jtJv2STMDny2gF==",
        "message": "Esta va desde el botón",
        "language": "es-cl",
        "servicio": "SERVICIO 1",
        "criticidad": "critical",
        "external_id": "custom_unique_identifier1",
        "custom": {
          "pais": "Argentina",
          "negocio": "temp",
          "Impacto": "Bajo"
        }
      }
    },
    icon:LightBulbIcon
  },
  {
    title: "Pedir Pizza Hood",
    text: `Ordena tu pizza a domicilio ahora mismo dentro del condominio. ¡Entregas disponibles hasta las 22:00 horas! ¡Disfruta del sabor!"`,
    icon: BeakerIcon,
  },
  {
    title: "Llamar a mamá",
    text: `¡Es hora de llamar a mamá! Marca y comparte ese momento especial. ¡Hazle saber cuánto la aprecias y extrañas!`,
    icon: LightBulbIcon,
  },
  {
    title: "Enviar recordatorio de medicamento",
    text: `Recordatorio importante: Tómate tu medicamento ahora. Cuida de tu salud. Siempre es crucial seguir el plan de tratamiento. ¡Cuídate!`,
    icon: LinkIcon,
  },
];

const takeAction = async (action) => {
  switch (action.via) {
    case 'API': 
      try {
        const response = await fetch('/api/execute/', {
      method: action.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action),
    });
      } catch (error) {
        console.log(error)
      }
  }
};


export default function Home() {

  return (
    <main className="p-12">
      <Title>Panic at the button</Title>
      <Text>Tu lista de botones</Text>

      <Grid numItemsMd={1} className="mt-6 gap-4">
      {categories.map((item) => (
        <Card key={item.title} className="max-w-lg mx-auto" decoration="top" decorationColor="indigo">
          <Icon variant="light" icon={item.icon} size="lg" color="blue" />
          <Title className="mt-6">{item.title}</Title>
          <Text className="mt-2">{item.text}</Text>
          <Flex className="mt-6 pt-4 border-t">
            <Button size="xs" variant="light" icon={ArrowRightIcon} iconPosition="right" onClick={() => takeAction(item.action)}>
              Ejecutar
            </Button>
          </Flex>
        </Card>
      ))}
      </Grid>
      </main>
  )
}
