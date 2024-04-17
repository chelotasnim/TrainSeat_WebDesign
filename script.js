const data = [
    {
        nama: 'Chelo Tasnim Haryono',
        kursi: '5A'
    },
    {
        nama: 'Radhitia Pratama Effendy',
        kursi: '7D'
    },
    {
        nama: 'Nutriyo',
        kursi: '11C'
    },
    {
        nama: "Farhan Andika",
        kursi: "1A"
    },
    {
        nama: "Siti Rahma",
        kursi: "2B"
    },
    {
        nama: "Ahmad Fadil",
        kursi: "3C"
    },
    {
        nama: "Dewi Lestari",
        kursi: "4D"
    },
    {
        nama: "Budi Santoso",
        kursi: "5E"
    },
    {
        nama: "Nadia Fitriani",
        kursi: "6A"
    },
    {
        nama: "Rizki Ramadhan",
        kursi: "7B"
    },
    {
        nama: "Siti Nurul",
        kursi: "8C"
    },
    {
        nama: "Agus Setiawan",
        kursi: "9D"
    },
    {
        nama: "Rina Wulandari",
        kursi: "10E"
    }
];
const cols = ['A', 'B', 'C', 'D', 'E'];
const size = {
    row: 11,
    col: 5,
    separator: 3
};

const container = document.getElementById('container');

function splitName(name) {
    arrName = name.split(' ');
    if (arrName.length >= 2) {
        return arrName[0].split('')[0] + arrName[1].split('')[0];
    } else {
        return name.substring(0, 2);
    };
};

for (let row = 0; row < size.row + 1; row++) {
    const seat_row = document.createElement('div');
    seat_row.classList.add('row');

    for (let col = 0; col < size.col + 1; col++) {
        const seat = document.createElement('div');
        if (col === 0 && row === 0) {
            seat.classList.add('blank');
        } else if (col > 0 && row === 0) {
            seat.classList.add('col');
            seat.textContent = cols[col - 1];
        } else if (col === 0 && row > 0) {
            seat.classList.add('index');
            seat.textContent = row;
        } else {
            seat.classList.add('seat');
            data.forEach(pax => {
                if (pax.kursi === row.toString() + cols[col - 1]) {
                    seat.classList.remove('seat');
                    seat.classList.add('reserved');
                    seat.textContent = splitName(pax.nama);
                };
            });
        };

        seat_row.appendChild(seat);

        if (col === size.separator) {
            const separator = document.createElement('div');
            separator.classList.add('separator');
            seat_row.appendChild(separator);
        };
    };

    container.appendChild(seat_row);
};