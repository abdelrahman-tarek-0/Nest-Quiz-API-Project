import {
   BaseEntity,
   Entity,
   PrimaryGeneratedColumn,
   Column,
   CreateDateColumn,
   UpdateDateColumn,
} from 'typeorm'

@Entity('quizzes')
export class Quiz extends BaseEntity {
   @PrimaryGeneratedColumn('uuid')
   id: string

   @Column({
      type: 'nvarchar',
      unique: true,
   })
   title: string

   @Column({
      type: 'text',
   })
   description: string

   @CreateDateColumn({
      type: 'datetime',
      default: () => 'CURRENT_TIMESTAMP',
   })
    createdAt: Date

   @UpdateDateColumn({
      type: 'datetime',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
   })
    updatedAt: Date

}
