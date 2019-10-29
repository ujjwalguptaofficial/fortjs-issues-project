import { Controller, DefaultWorker, textResult, viewResult, Worker, Assign, Singleton, jsonResult } from "fortjs";
import { UserService } from "../services/user_service";
import { StudentService } from "../services/student_service";
import { EmployeeService } from "../services/employee_service";

export class DefaultController extends Controller {

    userService: UserService;
    studentService: StudentService;
    employeeService: EmployeeService;
    constructor(@Singleton(UserService) userService,
        @Singleton(StudentService) studentService,
        @Singleton(EmployeeService) employeeService) {

        super();
        this.userService = userService;
        this.studentService = studentService;
        this.employeeService = employeeService;
    }

    @DefaultWorker()
    async index(@Assign('FortJs') title: string) {
        const data = {
            title: title
        };
        const result = await viewResult('default/index.html', data);
        return result;
    }

    @Worker()
    async getAll() {
        return jsonResult([...this.studentService.getAll(), ...this.employeeService.getAll(),
        ...this.employeeService.getAll()]);
    }
}