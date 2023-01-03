import { CandidateType } from '../models/candidates.types';

const URL = 'http://localhost:7700/';

export class Repository {
    get(): Promise<Array<CandidateType>> {
        const url = URL + 'candidates/';
        return fetch(url, {
            method: 'GET',
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return res.match;
            })
            .catch((error) => {
                return error;
            });
    }
    create(item: Partial<CandidateType>): Promise<CandidateType> {
        const url = URL + 'candidates/';
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return error;
            });
    }
}
