import { Controller, DefaultWorker, textResult, viewResult, Worker, Assign, HTTP_STATUS_CODE, HTTP_METHOD, Route, jsonResult } from "fortjs";
import { Summary, Description, Response } from "fortjs-swagger";
import { User } from "../swagger_models/user";

export class DefaultController extends Controller {


    @Summary("Gets all orders")
    @Description("Gets all booked orders.")
    @Response(HTTP_STATUS_CODE.Ok, [User])
    @Worker([HTTP_METHOD.Get])
    @Route("/")
    async index(@Assign('FortJs') title: string) {
        return textResult("Test", HTTP_STATUS_CODE.Ok)
    }
}