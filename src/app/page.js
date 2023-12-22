'use client'
import { Card, Text, Button, Icon, Flex, Title, Grid } from "@tremor/react";

import { LinkIcon, BeakerIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const categories = [
  {
    title: "Pedir Pizza Hood",
    text: `Ordena tu pizza a domicilio ahora mismo dentro del condominio. ¡Entregas disponibles hasta las 22:00 horas! ¡Disfruta del sabor!"`,
    icon: BeakerIcon,
  },
  {
    title: "Avisar que viene visita",
    text: `¡Atención! Pronto llegará una visita. Por favor, permite su ingreso. Agradecemos tu colaboración. ¡Disfruta del encuentro!`,
    icon: BeakerIcon,
  },
  {
    title: "Llamar a mamá",
    text: `¡Es hora de llamar a mamá! Marca y comparte ese momento especial. ¡Hazle saber cuánto la aprecias y extrañas!`,
    icon: BeakerIcon,
  },
  {
    title: "Enviar recordatorio de medicamento",
    text: `Recordatorio importante: Tómate tu medicamento ahora. Cuida de tu salud. Siempre es crucial seguir el plan de tratamiento. ¡Cuídate!`,
    icon: LinkIcon,
  },
];

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
            <Button size="xs" variant="light" icon={ArrowRightIcon} iconPosition="right">
              View more
            </Button>
          </Flex>
        </Card>
      ))}
      </Grid>
      </main>
  )
}
