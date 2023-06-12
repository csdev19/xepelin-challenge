import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AccountEntity } from './account.entity';
import { Status } from 'libs/common/src/utils/enums/status.enum';
import { PersonPO } from '../plain_objects/person.po';
import { GenericTable } from 'libs/common/src/utils/interfaces/generic-table.interface';

@Entity('persons')
// @Index(['_document', 'document_number'], { unique: true })
export class PersonEntity implements GenericTable<PersonPO> {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({ nullable: false, length: 64 })
  public names: string;

  @Column({ nullable: false, length: 64 })
  public surnames: string;

  @Column({ nullable: false, length: 50, unique: true })
  public email: string;

  @Column({ select: false })
  password?: string;

  @Column({ nullable: true })
  public createdBy?: number | null;

  @Column({ nullable: true })
  public updatedBy?: number | null;

  @Column({ nullable: true })
  public deletedBy?: number | null;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  public updatedAt: string | null;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  public deletedAt?: string | null;

  // @ManyToOne(() => AccountEntity, { nullable: false })
  // @JoinColumn({ name: 'accountId' })
  // public _accounts: AccountEntity;

  @Column('enum', {
    enum: Status,
    default: Status.ACTIVE,
    // enumName: 'employee_credentials_status_enum',
    nullable: false,
  })
  public status: Status;
}
