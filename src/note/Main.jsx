import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NodeApp from "./NoteApp";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <NodeApp/>
    </StrictMode>
)

//memo atau memoization merupakan teknik optimasi untuk mempercepat program komputer, dengan cara menyimpan data secara sementara dari hasil kalkulasi, sehingga tidak perlu dikalkulasi ulang. memo merupakan hook performance. untuk menggunakan memo hook dengan menggunakan function useMemo(callback, [dependencies])