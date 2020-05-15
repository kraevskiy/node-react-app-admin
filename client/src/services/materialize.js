import M from "materialize-css"

export const toast = (message) => {
  M.toast({html: message})
}

