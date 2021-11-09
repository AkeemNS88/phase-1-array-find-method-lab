function superbowlWin(record) {
    let result = record.find( (record) => record.result === "W" );
    return wheresTheWin(result)
}


wheresTheWin = (result) => result ? result.year : undefined;