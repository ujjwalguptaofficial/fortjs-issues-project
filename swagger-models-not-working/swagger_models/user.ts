import { SwaggerModel, OptionalProperty, IgnoreProperty } from "fortjs-swagger";

export class User implements SwaggerModel {
    @OptionalProperty
    name: string
    password: string
    friends: Friend[];

    @IgnoreProperty
    init?(user: any) {
        this.name = user.name
        this.password = user.password
        this.friends = user.friends
    }

    getExample?() {
        this.name = "name";
        this.password = "password";
        // Problem seems to be related to nested classes. 
        // If I include User here it won't throw an error but it also won't show up as a property on the swagger page.
        const friend = new Friend();
        friend.name = "ujjwal";
        this.friends = [friend];
    }
}

export class Friend implements SwaggerModel {
    @OptionalProperty
    name: string;



    getExample?() {
        this.name = "name";
    }
}