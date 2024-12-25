import Row from "./Row";

export default function Tabel() {
    return (
       <table border="1">
        <tbody>
            <Row id="1" text="Html"/>
            <Row id="2" text="Css"/>
            <Row id="3" text="Javascript"/>
            <Row id="4" text="React"/>
        </tbody>
       </table>
    )
}