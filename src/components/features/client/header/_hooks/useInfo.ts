import { getInfo } from "../_action"

export const useInfo = async() => {
    const data = await getInfo()

    console.log({ data });
    return {
        data
    }
}