

export const Filter = () => {

    const select = document.createElement('select')
    select.innerHTML = `<option value="" selected disabled hidden>Choose</option>
    <option value="true">Aktivni</option>
    <option value="false">Neaktivni</option>`

    return select
}