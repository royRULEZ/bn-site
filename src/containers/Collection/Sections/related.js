/*
    Related Origins:

    SELECT babynamr.collection.name, babynamr.collection.url, babynamr.collection.id
    FROM babynamr.collection
    INNER JOIN babynamr.collection_names ON babynamr.collection_names.collection_id=babynamr.collection.id
    WHERE babynamr.collection_names.name IN (
        SELECT firstname
        FROM babynamr.collection_profiles
        WHERE collection_id = 2
    ) 
    AND babynamr.collection.type = 'origin'
    LIMIT 4
    
*/