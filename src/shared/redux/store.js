import { configureStore } from "@reduxjs/toolkit"
import {UserData} from "./action"
import {PostData} from "./action"

export const Store = configureStore({
    reducer: {
        UserData,
        PostData,

    },
})