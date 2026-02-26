interface Property {
    key: string;
    value: null | string | boolean | object;
}
interface PropertySubscriber {
    onPropertyChanged?(property: Property): void;
}
declare class PropertyBehaviorSubject {
    private property;
    private subscribers;
    constructor(keyName: string);
    addSubscriber(subscriber: PropertySubscriber): void;
    removeSubscriber(subscriber: PropertySubscriber): void;
    setProperty(property: Property): void;
}

export { type Property, PropertyBehaviorSubject, type PropertySubscriber };
