function main() {
    document.querySelector('#filterBtn').addEventListener('click', function(event) {
        event.preventDefault();
        const location = document.getElementById('filter-div').querySelector('input[name="location"]').value;
        const cuisine = document.getElementById('filter-div').querySelector('select[name="cuisine"]').value;

        if (document.contains(document.getElementById('error-create'))) {
            document.getElementById('error-filter').remove();
        }

        if (location === null || location === undefined) {
            const error = document.getElementById('filter-div').appendChild(document.createElement('div'));
            error.textContent = 'Error: invalid input. Cannot filter.';
            error.className += 'error';
            error.id = 'error-filter';
        } else {
            const req = new XMLHttpRequest();
            let url = '/api/places';

            if (location || cuisine) {
                url += '?';
            }
            if (location && location !== '') {
                url += 'location=' + location + '&';
            }
            if (cuisine) {
                url += 'cuisine=' + cuisine;
            }
            req.open('GET', url, true);

            req.addEventListener('load', function() {
                if (req.status >= 200 && req.status < 400) {
                    const data = JSON.parse(req.responseText);
                    console.log(data);
                    const list = document.getElementById('places-list');

                    list.innerHTML = '';

                    if (data instanceof Array) {
                        data.forEach(function(msg) {
                            const table = list.appendChild(document.createElement('tr'));
                            const name = table.appendChild(document.createElement('td'));
                            const cuisine = table.appendChild(document.createElement('td'));
                            const location = table.appendChild(document.createElement('td'));
                            name.textContent = msg.name;
                            cuisine.textContent = msg.cuisine;
                            location.textContent = msg.location;
                        });
                    } else {
                        const table = list.appendChild(document.createElement('tr'));
                        const name = table.appendChild(document.createElement('td'));
                        const cuisine = table.appendChild(document.createElement('td'));
                        const location = table.appendChild(document.createElement('td'));
                        name.textContent = data.name;
                        cuisine.textContent = data.cuisine;
                        location.textContent = data.location;
                    }
                } else {
                    console.log(req.status);
                }
            });
            req.send();
        }
    });

    document.querySelector('#addBtn').addEventListener('click', function(event) {
        event.preventDefault();

        const name = document.getElementById('create-div').querySelector('#name').value;
        const location = document.getElementById('create-div').querySelector('#location').value;
        const cuisine = document.getElementById('create-div').querySelector('select[name="cuisine"]').value;

        if (document.contains(document.getElementById('error-create'))) {
            document.getElementById('error-create').remove();
        }

        if (name === '' || location === '' || name === null || location === null || name === undefined || location === undefined) {
            const error = document.getElementById('create-div').appendChild(document.createElement('div'));
            error.textContent = 'Error: invalid input. Cannot create a new place.';
            error.className += 'error';
            error.id = 'error-create';
        } else {
            const req = new XMLHttpRequest();
            let url = '/api/places';

            req.open('POST', url, true);
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            req.addEventListener('load', function() {
                if (req.status >= 200 && req.status < 400) {
                    const data = JSON.parse(req.responseText);
                    console.log(data);
                    const list = document.getElementById('places-list');

                    list.innerHTML = '';

                    if (data instanceof Array) {
                        data.forEach(function(msg) {
                            const table = list.appendChild(document.createElement('tr'));
                            const name = table.appendChild(document.createElement('td'));
                            const cuisine = table.appendChild(document.createElement('td'));
                            const location = table.appendChild(document.createElement('td'));
                            name.textContent = msg.name;
                            cuisine.textContent = msg.cuisine;
                            location.textContent = msg.location;
                        });
                    } else {
                        const table = list.appendChild(document.createElement('tr'));
                        const name = table.appendChild(document.createElement('td'));
                        const cuisine = table.appendChild(document.createElement('td'));
                        const location = table.appendChild(document.createElement('td'));
                        name.textContent = data.name;
                        cuisine.textContent = data.cuisine;
                        location.textContent = data.location;
                    }
                } else {
                    console.log(req.status);
                }
            });
            req.send({ 'name': name, 'location': location, 'cuisine': cuisine });
        }
    });

    // have all restaurants loaded in by default
    const req = new XMLHttpRequest();
    const url = '/api/places';
    req.open('GET', url, true);

    req.addEventListener('load', function() {
        if (req.status >= 200 && req.status < 400) {
            const data = JSON.parse(req.responseText);
            console.log(data);
            const list = document.getElementById('places-list');

            list.innerHTML = '';

            if (data instanceof Array) {
                data.forEach(function(msg) {
                    const table = list.appendChild(document.createElement('tr'));
                    const name = table.appendChild(document.createElement('td'));
                    const cuisine = table.appendChild(document.createElement('td'));
                    const location = table.appendChild(document.createElement('td'));
                    name.textContent = msg.name;
                    cuisine.textContent = msg.cuisine;
                    location.textContent = msg.location;
                });
            } else {
                const table = list.appendChild(document.createElement('tr'));
                const name = table.appendChild(document.createElement('td'));
                const cuisine = table.appendChild(document.createElement('td'));
                const location = table.appendChild(document.createElement('td'));
                name.textContent = data.name;
                cuisine.textContent = data.cuisine;
                location.textContent = data.location;
            }
        } else {
            console.log(req.status);
        }
    });
    req.send();
}

document.addEventListener('DOMContentLoaded', main);