import { audioChunks } from "./audio-chunks.ts";

// biome-ignore lint/style/noExportedImports: <test>
import { questions } from "./questions.ts";
import { rooms } from "./rooms.ts";

export const schema = {
    rooms,
    questions,
    audioChunks,
};

export { questions };
