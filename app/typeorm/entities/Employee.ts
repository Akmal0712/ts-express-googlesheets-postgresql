import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import internal from "stream";

@Entity('employees')
export class Employee {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    login: string

    @Column()
    position_id: number
}
