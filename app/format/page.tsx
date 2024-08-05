'use client'
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { useState } from "react";
import { DateInput } from "@nextui-org/react";
import React from "react";
import { Input } from "@nextui-org/react";
import { ButtonGroup } from "@nextui-org/button";
import { Button } from "@nextui-org/button";

export default function FormatPage() {
  const [date, setDate] = useState(today(getLocalTimeZone()));
  return (
    <main>
      <div className="flex flex-col justify-content items-center gap-6 m-5">
        <Calendar
          aria-label="Date"
          value={date}
          onChange={setDate}
        />
        <DateInput
          label="Fecha llamada"
          placeholderValue={date}
          value={date}  // Pass the date state to the DateInput component
          className="max-w-3xl"
        />
      </div>
      <div className="flex w-full flex-col md:flex-nowrap gap-4 m-5">
        <div className="flex gap-4">
          <Input type="text" label="Tipo documento" isDisabled className="flex-1" />
          <Input type="text" label="Número documento" className="flex-1" />
        </div>
        <div className="flex gap-4">
          <Input type="text" label="Nombres" isDisabled className="flex-1" />
          <Input type="text" label="Apellido" isDisabled className="flex-1" />
        </div>
        <div className="flex gap-4">
          <Input type="text" label="Fecha nacimiento" isDisabled className="flex-1" />
          <Input type="text" label="Edad en años" isDisabled className="flex-1" />
        </div>
        <div className="flex gap-4">
          <Input type="text" label="Edad en meses" isDisabled className="flex-1" />
          <Input type="text" label="Curso vida" isDisabled className="flex-1" />
        </div>
        <div className="flex gap-4">
          <Input type="text" label="Régimen" isDisabled className="flex-1" />
          <Input type="text" label="Tipo afiliado" isDisabled className="flex-1" />
        </div>
        <div className="flex gap-4">
          <Input type="text" label="Tipo población" isDisabled className="flex-1" />
          <Input type="text" label="Código municipio" isDisabled className="flex-1" />
        </div>
        <div className="flex gap-4">
          <Input type="text" label="Nombre municipio" isDisabled className="flex-1" />
          <Input type="text" label="Zona" isDisabled className="flex-1" />
        </div>
        <div className="flex gap-4">
          <Input type="text" label="Ips atención" isDisabled className="flex-1" />
          <Input type="text" label="Número teléfono reportado" isDisabled className="flex-1" />
        </div>
        <div className="flex gap-4">
          <Input type="text" label="Nombre y apellido acudiente" className="flex-1" />
          <Input type="text" label="Parentesco" className="flex-1" />
        </div>
        <div className="flex gap-4">
          <Input type="text" label="Teléfono de notificación" className="flex-1" />
          <Input type="text" label="Motivo llamada fallida" className="flex-1" />
        </div>
        <Input type="text" label="Observaciones" className="w-full" />
      </div>
      <div className="flex justify-center">
        <ButtonGroup>
          <Button>Guardar</Button>
          <Button>Limpiar</Button>
          <Button>Pdf</Button>
          <Button>Whatsapp</Button>
        </ButtonGroup>
      </div>
    </main>
  );
}
