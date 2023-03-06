import { useState } from "react";
import { CustomRow } from "./components/CustomRow";
import { Row } from "./components/Row";
import { Delete } from "react-feather";

type CalculatorState = {
    current: string;
    first: number | null;
    second: number | null;
    result: number | null;
    operation: Operations;
};

type Operations = "+" | "-" | "*" | "/" | "";

function App() {
    const rowClasses = {
        row1: `bg-gradient-to-b from-[#CACACC] to-[#C4C2CC] text-3xl font-medium `,
        row2: `bg-gradient-to-b from-[#FF9C17] to-[#F77E1B] text-white text-3xl font-medium `,
        row3: `bg-[#e0e0e7] text-3xl font-medium `,
    };
    const defaultState: CalculatorState = {
        current: "",
        first: null,
        second: null,
        result: null,
        operation: "",
    };
    const [state, setState] = useState<CalculatorState>(defaultState);

    const setNumbers = (value: string) => {
        setState((prev) => ({ ...prev, current: prev.current + value, result: null }));
    };

    const setOperation = (o: Operations) => {
        if (state.current.length === 0 || state.current[0] === ".") return;

        setState((prev) => ({
            ...prev,
            first: parseFloat(prev.current),
            operation: o,
            current: "",
        }));
    };

    const reset = () => {
        setState(defaultState);
    };

    const deleteNumber = () => {
        setState((prev) => ({ ...prev, current: prev.current.slice(0, -1) }));
    };

    const calculate = () => {
        if (typeof state.first !== "number" || state.current.length === 0 || state.current[0] === ".") return;

        switch (state.operation) {
            case "*":
                setState({ ...defaultState, result: state.first * parseFloat(state.current) });
                break;
            case "/":
                setState({ ...defaultState, result: state.first / parseFloat(state.current) });
                break;
            case "+":
                setState({ ...defaultState, result: state.first + parseFloat(state.current) });
                break;
            case "-":
                setState({ ...defaultState, result: state.first - parseFloat(state.current) });
                break;
        }
    };

    return (
        <main className="h-screen w-screen flex justify-center bg-slate-50 py-12">
            <div className="shadow-[0_0_20px_0_#aaa] rounded-sm overflow-hidden  flex flex-col min-w-[200px] h-min">
                <div className="outline outline-[0.5px] outline-black  text-white relative bg-gradient-to-b from-[#CACACC] to-[#C4C2CC] text-lg font-bold">
                    <Row className="invisible"></Row>
                    <Row className="invisible"></Row>
                    <div className="absolute inset-0 h-full w-full bg-[#1c191c] flex flex-row-reverse overflow-x-auto">
                        <div className="h-full flex p-2 gap-1 text-4xl">
                            <span>{state.first}</span>
                            <span>{state.operation}</span>
                            <span>{state.current}</span>
                            <span>{state.result ?? "="}</span>
                        </div>
                    </div>
                </div>
                <Row
                    className={""}
                    buttonsProps={[
                        { content: "AC", onClick: () => reset(), className: rowClasses.row1 },
                        {
                            content: " ",
                            onClick: () => deleteNumber(),
                            className: rowClasses.row1 + " flex justify-center items-center",
                            children: <Delete className="w-8 h-8" />,
                        },
                        { content: "%", className: rowClasses.row1 },
                        { content: "/", onClick: () => setOperation("/"), className: rowClasses.row2 },
                    ]}
                />
                <Row
                    buttonsProps={[
                        { content: "7", onClick: () => setNumbers("7"), className: rowClasses.row3 },
                        { content: "8", onClick: () => setNumbers("8"), className: rowClasses.row3 },
                        { content: "9", onClick: () => setNumbers("9"), className: rowClasses.row3 },
                        { content: "x", onClick: () => setOperation("*"), className: rowClasses.row2 },
                    ]}
                />
                <Row
                    buttonsProps={[
                        { content: "4", onClick: () => setNumbers("4"), className: rowClasses.row3 },
                        { content: "5", onClick: () => setNumbers("5"), className: rowClasses.row3 },
                        { content: "6", onClick: () => setNumbers("6"), className: rowClasses.row3 },
                        { content: "-", onClick: () => setOperation("-"), className: rowClasses.row2 },
                    ]}
                />
                <Row
                    buttonsProps={[
                        { content: "1", onClick: () => setNumbers("1"), className: rowClasses.row3 },
                        { content: "2", onClick: () => setNumbers("2"), className: rowClasses.row3 },
                        { content: "3", onClick: () => setNumbers("3"), className: rowClasses.row3 },
                        { content: "+", onClick: () => setOperation("+"), className: rowClasses.row2 },
                    ]}
                />
                <CustomRow
                    buttonsProps={[
                        { content: "0", onClick: () => setNumbers("0"), className: rowClasses.row3 },
                        {
                            content: ".",
                            onClick: () => state.current.length !== 0 && !state.current.includes(".") && setNumbers("."),
                            className: rowClasses.row3,
                        },
                        { content: "=", onClick: () => calculate(), className: rowClasses.row2 },
                    ]}
                />
            </div>
        </main>
    );
}

export default App;
