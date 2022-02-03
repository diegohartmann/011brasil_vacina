class VaccineGroups{
    constructor(_group1, _group2, _group3, _group4){
        this.day1 = _group1;
        this.day2 = _group2;
        this.day3 = _group3;
        this.day4 = _group4;
    }
}
export const createVaccineGroup = (_group1, _group2, _group3, _group4) => new VaccineGroups (_group1, _group2, _group3, _group4);