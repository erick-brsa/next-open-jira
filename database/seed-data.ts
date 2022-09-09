interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: wserlkjgkjashdfbkasjdhfcg34kjashdfgwelkjwhr',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En progreso: LÑKSHDFLKJ lksjhlkesr .aksdjfhlerkjh lskjhfgleksjr paush 4w',
            status: 'in-progress',
            createdAt: Date.now() - 100000,
        },
        {
            description: 'Finalizado: asdflkahe lasudfhqw elkjahsdfoiuwh rp48y ouw o384y 3ouigoaujdhfowuiegr lkasjdhf lsuehr',
            status: 'finished',
            createdAt: Date.now() - 1000000,
        },
    ]
}