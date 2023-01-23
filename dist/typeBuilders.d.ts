import { Colors as ColorsType, Control, CustomControl, MultiselectControl, NodeType, NodeTypeConfig, NumberControl, PortType, PortTypeBuilder, PortTypeConfig, SelectControl } from "./types";
export declare const Controls: {
    text: (config: Partial<Control>) => {
        type: "number" | "text" | "select" | "checkbox" | "multiselect" | "custom" | undefined;
        label: any;
        name: any;
        defaultValue: any;
        setValue: any;
    };
    select: (config: Partial<SelectControl & {
        type: import("./types").ControlTypes;
        label: string;
        name: string;
        defaultValue: any;
        setValue: import("./types").ValueSetter;
    }>) => {
        type: "select" | undefined;
        label: any;
        name: any;
        defaultValue: any;
        setValue: any;
    };
    number: (config: Partial<NumberControl & {
        type: import("./types").ControlTypes;
        label: string;
        name: string;
        defaultValue: any;
        setValue: import("./types").ValueSetter;
    }>) => {
        type: "number" | undefined;
        label: any;
        name: any;
        defaultValue: any;
        setValue: any;
    };
    checkbox: (config: Partial<Control>) => {
        type: "number" | "text" | "select" | "checkbox" | "multiselect" | "custom" | undefined;
        label: any;
        name: any;
        defaultValue: any;
        setValue: any;
    };
    multiselect: (config: Partial<MultiselectControl & {
        type: import("./types").ControlTypes;
        label: string;
        name: string;
        defaultValue: any;
        setValue: import("./types").ValueSetter;
    }>) => {
        type: "multiselect" | undefined;
        label: any;
        name: any;
        defaultValue: any;
        setValue: any;
    };
    custom: (config: Partial<CustomControl & {
        type: import("./types").ControlTypes;
        label: string;
        name: string;
        defaultValue: any;
        setValue: import("./types").ValueSetter;
    }>) => {
        type: "custom" | undefined;
        label: any;
        name: any;
        defaultValue: any;
        setValue: any;
    };
};
export declare const Colors: {
    [key: string]: ColorsType;
};
export declare const getPortBuilders: (ports: {
    [portType: string]: PortType;
}) => {
    [portType: string]: PortTypeBuilder;
};
export declare class FlumeConfig {
    nodeTypes: {
        [nodeType: string]: NodeType;
    };
    portTypes: {
        [portType: string]: PortType;
    };
    constructor(config?: {
        nodeTypes: {
            [nodeType: string]: NodeType;
        };
        portTypes: {
            [portType: string]: PortType;
        };
    });
    addRootNodeType(config: NodeTypeConfig): this;
    addNodeType(config: NodeTypeConfig): this;
    removeNodeType(type: string): this;
    addPortType(config: PortTypeConfig): this;
    removePortType(type: string, { skipDynamicNodesCheck }?: {
        skipDynamicNodesCheck?: boolean | undefined;
    }): this;
}
