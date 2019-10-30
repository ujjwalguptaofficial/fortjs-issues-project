export class EmployeeService {
    async getAll() {
        return new Promise((resolve, reject) => {
            resolve([{
                id: 1,
                name: 'ujjwal',
                type: 'employee'
            }])
        }) 
    }
}