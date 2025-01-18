class PastDateValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    return unless value.present? && value > Time.zone.today

    record.errors.add(attribute, 'は未来日は指定できません')
  end
end
