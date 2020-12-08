export type CandidatoPlatform = 'Zé das Cove' | 'Email' | 'Olivia';

export type Candidato = {
    id: number;
    title: string;
    platform: CandidatoPlatform;
    label: string;
    value: number;
}