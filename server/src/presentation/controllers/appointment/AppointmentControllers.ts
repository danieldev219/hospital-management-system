import { NextFunction, Response } from "express";
import { CustomRequest, StatusCode } from "../../../types";
import CreateAppointmentUseCase from "../../../use_case/appointment/CreateAppointmentUseCase";
import GetAppointmentUseCase from "../../../use_case/appointment/GetAppointmentUseCase";
import { AppointmentStatus } from "../../../domain/entities/IAppointment";

export default class AppointmentController {
    constructor(
        private createAppointmentUseCase: CreateAppointmentUseCase,
        private getAppointmentUseCase: GetAppointmentUseCase
    ) { }

    async create(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            const { appointment } = req.body;
            const patientId = req.patient?.id;
            const { appointmentId, orderId, patient } = await this.createAppointmentUseCase.exec(appointment, patientId!);
            res.status(StatusCode.Success).json({ orderId, appointmentId, patient });
        } catch (error: any) {
            next(error);
        }
    }

    async completePayment(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            const {  appointmentId,paymentData } = req.body;
            await this.createAppointmentUseCase.verifyPayment(paymentData, appointmentId)
            res.status(StatusCode.Success).json({ message: "Payment Verification Completed" });
        } catch (error) {
            next(error)
        }
    }

    async getAppointmentsDoctor(req:CustomRequest,res:Response,next:NextFunction){
        try {
            const doctorId = req.doctor?.id;
            const status = req.query.status as AppointmentStatus;
            const appointments =  await this.getAppointmentUseCase.getAppointmentsByDoctorId(doctorId!,status);
            res.status(StatusCode.Success).json({appointments})
        } catch (error) {
            next(error)
        }
    }

}
