
import { Controller, DefaultWorker, Worker, textResult, Singleton, jsonResult } from "fortjs";
import { UserService } from "../services/user_service";
import { StudentService } from "../services/student_service";
import { EmployeeService } from "../services/employee_service";

export class TestController extends Controller {

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
    async index() {
        return jsonResult([...this.studentService.getAll(), ...this.employeeService.getAll(),
        ...this.employeeService.getAll()]);
    }
}