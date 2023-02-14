

export const insert_regex = /^INSERT INTO \w+ \((\w+(,\w+)*)\) VALUES \((\w+(,\w+)*)\);?$/i;
export const insert_all_regex = /^INSERT INTO \w+ \* VALUES \((\w+(,\w+)*)\);?$/i;
export const select_regex = /^SELECT \((\w+(,\w+)*)\) FROM (\w+)\ */i;
export const select_where_regex = /^SELECT \((\w+(,\w+)*)\) FROM (\w+) WHERE (\w+) = (\w+)\ */i;





