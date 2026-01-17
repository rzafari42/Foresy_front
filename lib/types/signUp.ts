
export interface IBaseStep {
    title : string;
    description : string
}

export interface IOptionsStep extends IBaseStep {
    options : {
        label : string;
        description? : string;
        value : string;
    }[]
}

export interface IAuthStep extends IBaseStep {
    signupOptions : {
        type : string;
        label : string;
        icon : React.ElementType;
    }[]
}

export interface IFormField {
    label : string;
    placeholder : string;
    type : string;
    name : string;
}

export interface IFormStep extends IBaseStep {
    fields : {
        first_line? : IFormField[];
        second_line? : IFormField[];
        third_line? : IFormField[];
    }
}

