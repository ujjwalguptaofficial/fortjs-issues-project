
import { Controller, DefaultWorker, Worker, textResult, Singleton, jsonResult, HTTP_METHOD, Route } from "fortjs";
import { UserService } from "../services/user_service";
import { StudentService } from "../services/student_service";
import { EmployeeService } from "../services/employee_service";

export class TestController extends Controller {

    userService: UserService;
    studentService: StudentService;
    employeeService: EmployeeService;
    constructor(@Singleton(UserService) userService: UserService,
    @Singleton(StudentService) studentService: StudentService,
    @Singleton(EmployeeService) employeeService: EmployeeService,
        ) {

        super();
        this.userService = userService;
        this.studentService = studentService;
        this.employeeService = employeeService;
    }

    @Worker([HTTP_METHOD.Get])
    @Route("/employee")
    async getEmployees() {
        return this.employeeService.getAll()
            .then((employee) => {
                return jsonResult(employee)
            })
    }

    @Worker([HTTP_METHOD.Get])
    @Route("/user")
    async getUsers() {
        return jsonResult(this.userService.getAll())
    }

    @Worker([HTTP_METHOD.Get])
    @Route("/student")
    async getStudents() {
        return this.studentService.getAll()
            .then((student) => {
                return jsonResult(student)
            })
    }


}