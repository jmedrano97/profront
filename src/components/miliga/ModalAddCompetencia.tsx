import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Select, SelectItem } from "@nextui-org/react";
import { useForm } from 'react-hook-form'
import { CompetenciasType } from "../../models/miliga/CompetenciasModel";
import { LIGA_ACTUAL } from "../../constants/miliga/MiligaConstants";
import { competenciasServices } from "../../services/miliga/competenciasServices";
import { toast } from "react-hot-toast";

const ModalAddCompetencia = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const {
        register,
        handleSubmit,
        // control,
        // setValue,
        formState: { errors }
    } = useForm<CompetenciasType>({})

    const onSubmit = handleSubmit(async (data) => {
        try {
            const response = await competenciasServices.createCompetencia({ ...data, liga: LIGA_ACTUAL })
            toast.success('Competencia creada')
            console.log(response)
            onOpenChange()
        } catch (error) {
            toast.error('Error al crear competencia')
        }
    })

    return (
        <>
            <Button onPress={onOpen} color="default" className="w-full">Nueva</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                className="dark text-foreground"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Nueva competencia</ModalHeader>
                            <form action="" onSubmit={onSubmit}>
                                <ModalBody>
                                    <Input
                                        autoFocus
                                        label="Nueva competencia"
                                        // placeholder="Enter your email"
                                        variant="bordered"
                                        {...register('nombre', { required: true })}
                                    />
                                    <Select
                                        label="Tipo"
                                        className=""
                                        {...register('tipo', { required: true })}
                                    >
                                        <SelectItem key='Puntos'>Puntos</SelectItem>
                                        <SelectItem key='Eliminatoria'>Eliminatoria</SelectItem>
                                    </Select>

                                </ModalBody>

                                <ModalFooter>
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Cancelar
                                    </Button>
                                    <Button color="primary" type='submit'>
                                        Guardar
                                    </Button>
                                </ModalFooter>
                            </form>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalAddCompetencia